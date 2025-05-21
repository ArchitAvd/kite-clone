import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useWatchlists } from '~/hooks/useWatchlists';
import { FontAwesome5 } from '@expo/vector-icons';

export default function WatchlistView() {
  const { activeTab, watchlists, stocks, addStock, removeStock, switchTab, createTab, deleteTab } =
    useWatchlists();

  const [query, setQuery] = useState('');

  const handleAddStock = () => {
    if (!query.trim()) return;
    addStock(query);
    setQuery('');
  };

  const renderItem = ({ item }: any) => {
    const isPositive = item.change >= 0;
    return (
      <View className="flex-row items-center justify-between border-b border-gray-800 px-4 py-3">
        <View>
          <Text className="text-base font-semibold text-white">{item.symbol}</Text>
          <Text className={isPositive ? 'text-green-400' : 'text-red-400'}>
            ₹{item.price.toFixed(2)} ({isPositive ? '+' : ''}
            {item.change}, {item.percent}%)
          </Text>
        </View>
        <TouchableOpacity onPress={() => removeStock(item.symbol)}>
          <FontAwesome5 name="trash-alt" size={20} color="black" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-black">
      {/* Search */}
      <View className="flex-row items-center bg-gray-900 px-4 py-3">
        <TextInput
          placeholder="Add symbol (e.g. TCS)"
          placeholderTextColor="#888"
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleAddStock}
          className="flex-1 rounded-xl bg-gray-800 px-4 py-2 text-white"
        />
        <TouchableOpacity onPress={handleAddStock} className="ml-2 rounded-xl bg-green-700 p-2">
          <FontAwesome5 name="plus" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Stock List */}
      <FlatList data={stocks} keyExtractor={(item) => item.symbol} renderItem={renderItem} />
    </View>
  );
}
