
const URL_REGEX = /https\:\/\/docs\.google\.com\/spreadsheets\/d\/(?<id>.*)\/edit/g;

/**
 * Get the sheet id from the url
 * @param url - Sheet url
 * @returns the id of the sheet
 */
function getSheetIdFromUrl(url : string) : string {
    const text = URL_REGEX.exec(url);
    if (!text || !text.groups) {return ''}
    return text.groups.id;
}

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function asDollar(value? : number) : string {
    return formatter.format(value || 0);
}

export {getSheetIdFromUrl, asDollar}