import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useWatchlists } from '~/hooks/useWatchlists';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

type Props = {
  tabName: string;
};

export default function WatchlistView({ tabName }: Props) {
  const { activeTab, watchlists, addStock, removeStock, switchTab, createTab, deleteTab } =
    useWatchlists();
  const stocks = watchlists[tabName] ?? [];
  const { colors } = useTheme();

  const [query, setQuery] = useState('');

  const handleAddStock = () => {
    if (!query.trim()) return;
    addStock(query);
    setQuery('');
  };

  const renderItem = ({ item }: any) => {
    const isPositive = item.change >= 0;
    return (
      <>
        <View
          className="mt-2 flex-row items-center justify-between border-b px-4 py-3"
          style={{ backgroundColor: colors.background }}>
          <View style={{ alignItems: 'flex-start' }}>
            <Text
              className="m-0 p-0 text-base font-semibold"
              style={{ color: colors.text, fontSize: 16, lineHeight: 20 }}>
              {item.symbol}
            </Text>
            <Text className="m-0 p-0 text-gray-500" style={{ fontSize: 12, lineHeight: 20 }}>
              NSE
            </Text>
          </View>

          <View className="" style={{ alignItems: 'flex-end' }}>
            <Text
              className={isPositive ? 'text-green-600' : 'text-red-600'}
              style={{ fontSize: 16 }}>
              {item.price.toFixed(2)}
            </Text>

            <Text className="pt-1 text-gray-500" style={{ fontSize: 12 }}>
              {isPositive ? '+ ' : ' '}
              {item.change} {'\u00A0\u00A0'}({isPositive ? '+ ' : ' '}
              {item.percent}%)
            </Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <View className="flex-1" style={{ backgroundColor: colors.background }}>
      {/* Search */}
      <View
        className="m-2 ml-4 mr-4 flex-row items-center rounded-3xl p-2 px-4 "
        style={{ backgroundColor: colors.card }}>
        <FontAwesome5 name="search" size={20} color={colors.text} />
        <TextInput
          placeholder="Add symbol (e.g. TCS)"
          placeholderTextColor="#888"
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleAddStock}
          className="flex-1 px-4 py-2 placeholder:italic"
          style={{ fontSize: 16, color: colors.text }}
        />
        <TouchableOpacity onPress={handleAddStock} className="rounded-full p-2">
          <FontAwesome5 name="list-ul" size={20} color={colors.text} />
        </TouchableOpacity>
      </View>

      {/* Stock List */}
      <FlatList
        data={stocks}
        keyExtractor={(item) => item.symbol}
        renderItem={renderItem}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: colors.border, marginHorizontal: 16 }} />
        )}
      />
    </View>
  );
}
