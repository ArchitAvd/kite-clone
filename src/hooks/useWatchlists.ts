import { useEffect, useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Stock = {
  symbol: string;
  price: number;
  change: number;
  percent: number;
};

type Watchlists = {
  [tabName: string]: Stock[];
};

const WATCHLISTS_KEY = '@watchlists';
const ACTIVE_TAB_KEY = '@activeTab';

export function useWatchlists() {
  const [watchlists, setWatchlists] = useState<Watchlists>({});
  const [activeTab, setActiveTab] = useState<string>('');

  // Load from AsyncStorage on first mount
  useEffect(() => {
    (async () => {
      const storedWatchlists = await AsyncStorage.getItem(WATCHLISTS_KEY);
      const storedActiveTab = await AsyncStorage.getItem(ACTIVE_TAB_KEY);

      const parsed = storedWatchlists ? JSON.parse(storedWatchlists) : {};
      const defaultTab = storedActiveTab || Object.keys(parsed)[0] || 'Watchlist 1';

      // Fallback to default tab if no data
      setWatchlists(parsed[defaultTab] ? parsed : { [defaultTab]: [] });
      setActiveTab(defaultTab);
    })();
  }, []);

  // Save to AsyncStorage whenever state changes
  useEffect(() => {
    AsyncStorage.setItem(WATCHLISTS_KEY, JSON.stringify(watchlists));
  }, [watchlists]);

  useEffect(() => {
    if (activeTab) {
      AsyncStorage.setItem(ACTIVE_TAB_KEY, activeTab);
    }
  }, [activeTab]);

  const addStock = useCallback(
    (symbol: string) => {
      const cleanSymbol = symbol.trim().toUpperCase();
      if (!cleanSymbol || watchlists[activeTab]?.some((s) => s.symbol === cleanSymbol)) return;

      const newStock: Stock = {
        symbol: cleanSymbol,
        price: parseFloat((100 + Math.random() * 1000).toFixed(2)),
        change: parseFloat((Math.random() * 20 - 10).toFixed(2)),
        percent: parseFloat((Math.random() * 4 - 2).toFixed(2)),
      };

      setWatchlists((prev) => ({
        ...prev,
        [activeTab]: [...(prev[activeTab] || []), newStock],
      }));
    },
    [watchlists, activeTab]
  );

  const removeStock = useCallback(
    (symbol: string) => {
      setWatchlists((prev) => ({
        ...prev,
        [activeTab]: prev[activeTab]?.filter((s) => s.symbol !== symbol),
      }));
    },
    [watchlists, activeTab]
  );

  const switchTab = useCallback(
    (tab: string) => {
      if (!watchlists[tab]) {
        setWatchlists((prev) => ({ ...prev, [tab]: [] }));
      }
      setActiveTab(tab);
    },
    [watchlists]
  );

  const createTab = useCallback(
    (tabName: string) => {
      if (watchlists[tabName]) return; // already exists
      setWatchlists((prev) => ({ ...prev, [tabName]: [] }));
      setActiveTab(tabName);
    },
    [watchlists]
  );

  const deleteTab = useCallback(
    (tabName: string) => {
      const { [tabName]: removed, ...rest } = watchlists;
      const fallbackTab = Object.keys(rest)[0] || 'Watchlist 1';
      setWatchlists(Object.keys(rest).length ? rest : { [fallbackTab]: [] });
      setActiveTab(fallbackTab);
    },
    [watchlists]
  );

  return {
    watchlists,
    activeTab,
    stocks: watchlists[activeTab] || [],
    addStock,
    removeStock,
    switchTab,
    createTab,
    deleteTab,
  };
}
