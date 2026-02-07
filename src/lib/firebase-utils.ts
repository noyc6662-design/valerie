/**
 * Firebase Hook Utilities
 * Provides convenient exports for Firebase services and utilities
 */

export { app, auth, db, storage, analytics } from './firebase';

export type { User } from 'firebase/auth';
export type {
  DocumentData,
  QueryConstraint,
  QueryCompositeFilterConstraint,
  QueryFilterConstraint,
} from 'firebase/firestore';
