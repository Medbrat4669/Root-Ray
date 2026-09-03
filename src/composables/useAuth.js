import { ref, readonly } from 'vue'

/**
 * Composables для работы с авторизацией
 * Будет интегрирован с Supabase Auth
 */

export function useAuth() {
  const user = ref(null)
  const isAuthenticated = ref(false)
  const loading = ref(false)

  // Методы для будущей авторизации
  async function login(email, password) {
    loading.value = true
    try {
      // Здесь будет вызов supabase.auth.signInWithPassword
      console.warn('Auth: login не реализован')
    } finally {
      loading.value = false
    }
  }

  async function logout() {
    loading.value = true
    try {
      // Здесь будет вызов supabase.auth.signOut
      console.warn('Auth: logout не реализован')
    } finally {
      loading.value = false
    }
  }

  return {
    user: readonly(user),
    isAuthenticated: readonly(isAuthenticated),
    loading: readonly(loading),
    login,
    logout
  }
}