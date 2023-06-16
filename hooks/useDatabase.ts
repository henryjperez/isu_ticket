import { useEffect } from "react";
import * as SQLite from 'expo-sqlite';

export const useDatabase = () => {
	const db = SQLite.openDatabase("example.db");

	useEffect(() => {
		db.transaction(tx => {
			tx.executeSql("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, username TEXT NOT NULL UNIQUE, password TEXT);");
		});
		db.transaction(tx => {
			tx.executeSql("CREATE TABLE IF NOT EXISTS tickets (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, date TEXT, longitude INT, latitude INT, phone TEXT, address TEXT);");
		});
		
	}, []);

	return db;
};