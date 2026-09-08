/**
 * Сервис для работы с Supabase
 * Использует переменные окружения из .env
 */

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Инициализация клиента
export const supabase = (supabaseUrl && supabaseKey) 
  ? createClient(supabaseUrl, supabaseKey) 
  : null

// Хелперы для работы с данными (db layer)
export const db = {
  /**
   * Получение данных из таблицы
   * @param {string} table - Имя таблицы
   * @param {object} query - Фильтры (опционально)
   */
  async getData(table, query = {}) {
    if (!supabase) {
      console.warn('Supabase не сконфигурирован. Запрос к [' + table + '] отменен.')
      return []
    }
    
    let request = supabase.from(table).select('*')
    
    // Пример применения простых фильтров
    Object.keys(query).forEach(key => {
      request = request.eq(key, query[key])
    })

    const { data, error } = await request
    
    if (error) {
      console.error('Ошибка при получении данных из ' + table + ':', error.message)
      return []
    }
    
    return data
  }
}
