import { getCategories } from './categories.js'

async function getAllCategories() {

  let pageZero = await getCategories(0);
  let pageOne = await getCategories(1);
  let pageTwo = await getCategories(2);

  let allCategories = [...pageZero, ...pageOne, ...pageTwo];

  let categoriesNotRepeat = new Set(allCategories);
  allCategories = Array.from(categoriesNotRepeat);
  
  return allCategories
}

export default getAllCategories