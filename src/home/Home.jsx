import React from "react";
// import { posts } from "../data/posts"//APIリクエストにより、使わなくなった
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Home = () => {
  const [posts, setPosts] = useState([])

  // APIでpostsを取得する処理をuseEffectで実行
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts")//API　リクエストを送信
      const data = await res.json();//レスポンスを JSON としてパース
      setPosts(data.posts); // 取得した投稿データをstateに設定
    }

    fetcher()//非同期関数を定義して実行
  }, [])


  return (
    <ul className="max-w-3xl mx-auto">
      {posts.map((post) => {
        return (
          <li key={post.id} className="border border-gray-300 my-10 p-4">
            {/* 【 Link 】HTMLのaタグ。to=""で飛ばすパスを設定するコンポーネント。 */}
            <Link to={`/posts/${post.id}`}>
              <div className="flex justify-between mb-4">
                <div className="text-gray-500 text-sm">{new Date(post.createdAt).toLocaleDateString()}</div>
                <div className="flex">{post.categories.map((category) => {
                  return (
                    <div key={category} className="border border-blue-600 rounded-md text-blue-600 text-sm mr-2 py-0.5 px-2">{category}</div>
                  )
                })}
                </div>
              </div>
              <h3 className="text-2xl mb-6">{post.title}</h3>
              <div className="leading-relaxed line-clamp-2" dangerouslySetInnerHTML={{ __html: post.content }} />
            </Link>
          </li>
        )
      })}
    </ul>
  )

}