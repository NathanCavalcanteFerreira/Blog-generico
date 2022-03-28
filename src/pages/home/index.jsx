import React, { useState, useEffect } from 'react';
import FeaturedPost from '../../componentes/featured-post';
import axios from 'axios';
import PostList from '../../componentes/post-list';

const instance = axios.create({
    baseURL: "https://newsapi.org/v2/everything"
});

const mock = [
    {
        image: "https://i.pinimg.com/originals/8a/ed/07/8aed075b2259a6f2bace5c4924ceb0a3.jpg",
        date: "March 13, 2012",
        title: "Let's Go",
        description: "Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis!Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Diuretics paradis num copo é motivis de denguis.Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.",

    },

    {
        image: "https://images3.alphacoders.com/575/thumb-1920-575608.jpg",
        date: "March 25, 2005",
        title: "That's right",
        description: "Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.Detraxit consequat et quo num tendi nada.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",

    },
    {
        image: "https://www.10wallpaper.com/wallpaper/medium/1806/Universe_Beautiful_Blue_Planet_Earth_Moon_Closeup_medium.jpg",
        date: "March 06, 2001",
        title: "Yeah",
        description: "Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.Cevadis im ampola pa arma uma pindureta.In elementis mé pra quem é amistosis quis leo.",

    }
];

export default function Home() {
    const [posts, setPosts] = useState(mock);

    async function getPosts() {
        const response = await instance.get("");
        this.setPosts({ description: response.data })
    }

    useEffect(() => {

    });

    return (
        <div>
            {posts && posts.length > 0 && <FeaturedPost post={posts[0]} />}

            <PostList posts={posts} />
        </div>
    );
}

