import React from "react";
// import { posts } from "../data/posts"//APIリクエストにより、使わなくなった。
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export const Detail = () => {
  //useParams は、URL パラメータを取得するために使用される React Router のフック。
  //useParams を呼び出すと、現在の URL に含まれているパラメータがオブジェクトとして返される
  const { id } = useParams();
  const [posts, setPosts] = useState(null)
  const [loading, setLoading] = useState(true);//最初はAPI呼び出しが始まっていないのでtrueの方が自然



  // APIでpostsを取得する処理をuseEffectで実行
  useEffect(() => {
    const fetcher = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`)// API リクエストを送信
        const data = await res.json()//レスポンスを JSON としてパース
        setPosts(data.post); // 取得した投稿データをstateに設定

      } catch (error) {
        // エラーが発生した場合、ここで処理
        console.error("データの取得中にエラーが発生しました:", error);
        setPosts(null); // エラー発生時に投稿データを null に設定
      } finally {
        setLoading(false);
      }
    };
    fetcher()//非同期関数を定義して実行
  }, [id])


  //// id を使って投稿を検索
  // const Post = posts.find((postItem) => postItem.id === parseInt(id));
  //parseInt()はidの文字列を整数（数値）として渡すために


  if (loading) return <div>...読み込み中...</div>
  if (!loading && !posts) {
    return <div>投稿が見つかりませんでした。</div>; // 記事が見つからなかった場合
  }

  return (
    <div className="max-w-3xl mx-auto my-10 px-4">
      <img src={posts.thumbnailUrl} alt={posts.title} className="mb-4"></img>
      <div className="flex justify-between items-center mb-6">
        <div className="text-gray-500 text-sm">{new Date(posts.createdAt).toLocaleDateString()}</div>
        <div className="flex">{posts.categories.map((category, index) => {
          return (
            <div className="border border-blue-600 rounded-md px-2 py-1 mr-2 text-sm text-blue-600" key={index}>{category}</div>
          )
        })}</div>
      </div>
      <p className="text-2xl mb-6">{posts.title}</p>
      <div className="leading-relaxed" dangerouslySetInnerHTML={{ __html: posts.content }}></div>

    </div>
  )
};