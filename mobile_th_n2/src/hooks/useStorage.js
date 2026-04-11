import { useState, useEffect, useCallback, useRef } from 'react';
import * as storageService from '../services/storageService';

/**
 * useStorage
 * @param {'user'|'orders'|'cart'|'favourites'} key
 * @param {any} defaultValue
 * @returns {{ data: any, isLoading: boolean, save: Function, remove: Function, refresh: Function }}
 */
export default function useStorage(key, defaultValue = null) {
    const [data, setData] = useState(defaultValue);
    const [isLoading, setIsLoading] = useState(true);
    const mountedRef = useRef(true);
    // use ref for defaultValue to avoid infinite loop when passing [] or {}
    const defaultValueRef = useRef(defaultValue);

    // mapping key -> storage get/save/remove functions
    const getStorageOps = useCallback(() => {
        switch (key) {
            case 'user':
                return {
                    get: storageService.getUser,
                    save: storageService.saveUser,
                    remove: storageService.removeUser,
                };
            case 'orders':
                return {
                    get: storageService.getOrders,
                    save: storageService.saveOrder,
                    remove: null,
                };
            case 'cart':
                return {
                    get: storageService.getCart,
                    save: storageService.saveCart,
                    remove: null,
                };
            case 'favourites':
                return {
                    get: storageService.getFavourites,
                    save: storageService.saveFavourites,
                    remove: null,
                };
            default:
                console.warn(`[useStorage] Unknown key: ${key}`);
                return {
                    get: async () => defaultValueRef.current,
                    save: async () => {},
                    remove: null,
                };
        }
    }, [key]);

    // load data on mount
    const loadData = useCallback(async () => {
        setIsLoading(true);
        try {
            const ops = getStorageOps();
            const result = await ops.get();
            if (mountedRef.current) {
                setData(result ?? defaultValueRef.current);
            }
        } catch (error) {
            console.error(`[useStorage] Error loading "${key}":`, error);
            if (mountedRef.current) {
                setData(defaultValueRef.current);
            }
        } finally {
            if (mountedRef.current) {
                setIsLoading(false);
            }
        }
    }, [key, getStorageOps]);

    useEffect(() => {
        mountedRef.current = true;
        loadData();
        return () => {
            mountedRef.current = false;
        };
    }, [loadData]);

    // save data
    const save = useCallback(async (newData) => {
        try {
            const ops = getStorageOps();
            await ops.save(newData);
            if (mountedRef.current) {
                // for orders, save 1 more order -> need reload
                if (key === 'orders') {
                    await loadData();
                } else {
                    setData(newData);
                }
            }
        } catch (error) {
            console.error(`[useStorage] Error saving "${key}":`, error);
        }
    }, [key, getStorageOps, loadData]);

    // remove data
    const remove = useCallback(async () => {
        try {
            const ops = getStorageOps();
            if (ops.remove) {
                await ops.remove();
            }
            if (mountedRef.current) {
                setData(defaultValueRef.current);
            }
        } catch (error) {
            console.error(`[useStorage] Error removing "${key}":`, error);
        }
    }, [key, getStorageOps]);

    // refresh (re-load from storage)
    const refresh = useCallback(() => {
        return loadData();
    }, [loadData]);

    return { data, isLoading, save, remove, refresh };
}
