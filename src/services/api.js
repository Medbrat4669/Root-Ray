/**
 * API слой для взаимодействия с бэкендом
 * Все вызовы к данным идут через этот сервис
 */

import { db } from './supabase'

export const api = {
  /**
   * Получение списка всех товаров
   */
  async getProducts() {
    return await db.getData('products')
  },
  
  /**
   * Получение одного товара по ID
   */
  async getProduct(id) {
    return await db.getData('products', { id })
  },
  
  /**
   * Создание заказа
   */
  async createOrder(data) {
    // Временная заглушка до подключения Supabase
    console.warn('API: createOrder не реализован', data)
    return { success: true }
  }
}
