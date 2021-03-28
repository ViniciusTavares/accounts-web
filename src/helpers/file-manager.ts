import { saveAs } from 'file-saver'

export const saveFile = (content: any, name: string) : void => saveAs(content, name);