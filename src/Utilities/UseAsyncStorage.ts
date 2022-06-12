import AsyncStorage from "@react-native-async-storage/async-storage";
import {SHEET_ID} from "@env";
const SHEET_ID_KEY = "SHEET_ID";
const TERM_ID_KEY = "TERM_ID"

/**
 * Save the sheet id in async storage
 * @param id - Sheet ID
 */
async function saveSheetId(id : string) {
    await AsyncStorage.setItem(SHEET_ID_KEY, id);
}

/**
 * Get the sheet id from async storage
 * @returns The sheet ID
 */
async function getSheetId() : Promise<string> {
    return await AsyncStorage.getItem(SHEET_ID_KEY) || SHEET_ID;
}

/**
 * Save the term to async storage
 * @param id The term
 */
async function saveTerm(id : string) {
    await AsyncStorage.setItem(TERM_ID_KEY, id);
} 

/**
 * Get the term from async storage
 * @returns The term id
 */
async function getTermKey() : Promise<string> {
    return await AsyncStorage.getItem(TERM_ID_KEY) || "";
}

export {saveSheetId, getSheetId, saveTerm, getTermKey};