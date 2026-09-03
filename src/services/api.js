/**
 * API слой для взаимодействия с бэкендом
 * Все вызовы к данным идут через этот сервис
 */

import { db } from './supabase'

export const api = {
  // Примеры методов для будущих данных
  async getProducts() {
    return await db.getData('products')
  },
  
  async getProduct(id) {
    return await db.getData('products', { id })
  },
  
  async createOrder(data) {
    // Заглушка
    console.warn('API: createOrder не реализован', data)
    return { success: true }
  }
}