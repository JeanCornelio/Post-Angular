
export interface Category{
    _id: string,
    createdAt: string,
    name: string,
    posts: Posts[],
    updatedAt: string
}

export interface CategoryPost{
    name: string,
}

export interface Posts{
    createdAt: string,
    title: string,
    updatedAt: string,
    categories: categories[];
}

export interface PostsPost{
    title: string,
    categories: categories[];
}



export interface categories{
    _id: string;
}