import { Suspense } from "react";
import { connection } from "next/server";
import { CatImage } from "./cat-image";
import { fetchImage } from "./fetch-image";

async function RandomCat() {
  // ビルド時にfetchImageの結果が固定されないようにする
    await connection();
  // APIから画像を取得
    const image = await fetchImage();
  // 画像のURLを渡す
    return <CatImage url={image.url} />;
}

export default function Home() {
    return (
    <Suspense fallback={<p>猫の画像を読み込み中...</p>}>
        <RandomCat />
    </Suspense>
    );
}