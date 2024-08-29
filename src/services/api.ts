

export default async function getCategoriesData() {
    if (process.env.GET_CATEGORIES) {
        const getCategories: string = process.env.GET_CATEGORIES;
        const res = await fetch(getCategories);
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    }
}
