import React from "react";
import { posts } from "../data/posts"
import { useParams } from "react-router-dom";

export const Detail = () => {
  //useParams は、URL パラメータを取得するために使用される React Router のフック。
  //useParams を呼び出すと、現在の URL に含まれているパラメータがオブジェクトとして返される
  const { id } = useParams();
  //// id を使って投稿を検索
  const Post = posts.find((postItem) => postItem.id === parseInt(id));
  //parseInt()はidの文字列を整数（数値）として渡すために


  if (!Post) {
    return <div>投稿が見つかりませんでした。</div>; // 記事が見つからなかった場合
  }

  return (
    <div className="max-w-3xl mx-auto my-10 px-4">
      <img src={Post.thumbnailUrl} alt={Post.title} className="mb-4"></img>
      <div className="flex justify-between items-center mb-6">
        <div className="text-gray-500 text-sm">{new Date(Post.createdAt).toLocaleDateString()}</div>
        <div className="flex">{Post.categories.map((category, index) => {
          return (
            <div className="border border-blue-600 rounded-md px-2 py-1 mr-2 text-sm text-blue-600" key={index}>{category}</div>
          )
        })}</div>
      </div>
      <p className="text-2xl mb-6">{Post.title}</p>
      <div className="leading-relaxed" dangerouslySetInnerHTML={{ __html: Post.content }}></div>

    </div>
  )
};