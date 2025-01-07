const API_URL = 'http://127.0.0.1:8000/api/v1/blogs/';


export const fetchPosts = async () => {
    const response = await fetch(`${API_URL}`);
    if (response.status !== 200) {
        throw new Error('Failed to fetch posts');    
    };
    
    const data = await response.json();
    return data;
}


export const fetchSinglePost = async (id?: string) => {
    const response = await fetch(`${API_URL}${id}`)
    if (!response.ok) {
        throw new Error('Failed to fetch posts');    
    };
    
    const data = await response.json();
    return data;
}