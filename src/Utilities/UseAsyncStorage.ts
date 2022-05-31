import AsyncStorage from "@react-native-async-storage/async-storage";
import {SHEET_ID} from '@env'
const SHEET_ID_KEY = "SHEET_ID";

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

export {saveSheetId, getSheetId};