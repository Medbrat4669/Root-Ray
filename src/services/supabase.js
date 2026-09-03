/**
 * Сервис для работы с Supabase
 * Будет инициализирован при подключении бэкенда
 */

// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
// export const supabase = createClient(supabaseUrl, supabaseKey)

// Заглушка для будущей интеграции
export const supabase = null

// Хелперы для работы с данными
export const db = {
  // Здесь будут методы для работы с таблицами
  async getData(table) {
    // Временная заглушка
    console.warn('Supabase не инициализирован')
    return []
  }
}