const API_URL = 'http://127.0.0.1:8000/api/v1/blogs/';


export const fetchPosts = async () => {
    
    const response = await fetch(`${API_URL}`);
    if (response.status !== 200) {
        if (response.status == 403) {
        throw new Error('You are sending too many requests. Try again in some time');    
            
        }
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