import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sigOut
} from 'firebase/auth'
import { useState } from 'react'

const useAuthentication = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  //cleanup
  //deal with memory leak
  const [cancelled, setCancelled] = useState(false)

  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return
    }
  }
}