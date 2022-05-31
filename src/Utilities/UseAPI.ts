import axios from "axios";
import {USE_LOCAL, LOCAL_API, REMOTE_API} from '@env'
import { getSheetId } from "./UseAsyncStorage";
import Term from "../Types/Term";

/**
 * Get the full api url for the route and environment
 * @param route - The API route
 * @returns The full API url
 */
async function makeUrl(route : string) : Promise<string> {
    const source = (USE_LOCAL ? 
                            LOCAL_API : 
                            REMOTE_API) || '';

    return `${source}${await getSheetId()}/${route}`;
}


/**
 * Get a term by term ID and all it's data
 * @param id - Term name
 */
async function getTerm(id: string): Promise<Term> {
    const res = await axios.get<Term>(await makeUrl(id))
    return res.data;
}

/**
 * Get all terms and term data
 * @param id - Term name
 */
async function getTerms() : Promise<Term[]> {
    const res = await axios.get<Term[]>(await makeUrl(''))
    return res.data;
}


/**
 * Update the income section of spreadsheet
 * @param item - Item name
 * @param term - Term ID
 */
async function updateIncome(item : string, term : string, value : number) {
    await axios.patch(await makeUrl('income'), {item, term, value})
}


/**
 * Update the expense section of spreadsheet
 * @param name - Item name
 * @param term - Term ID
 */
async function updateExpense(item: string, term : string, value : number) {
    await axios.patch(await makeUrl('expense'), {item, term, value})
}

export {getTerm, getTerms, updateIncome, updateExpense};