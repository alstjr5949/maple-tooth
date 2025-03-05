import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 h-screen">
      <h1 className="flex justify-center items-center">
        <Image src="/zombie.webp" alt="logo" width={70} height={70} />
      </h1>
      <div className="flex items-center gap-4">
        <form className="flex flex-col justify-center gap-2" action="">
          <label htmlFor="start-level">시작 레벨</label>
          <input
            id="start-level"
            className="border-1 border-gray-200 rounded-md p-2"
            type="number"
            name="start-level"
            min={11}
          />
          <label htmlFor="end-level">종료 레벨</label>
          <input
            id="end-level"
            className="border-1 border-gray-200 rounded-md p-2"
            type="number"
            name="end-level"
            max={200}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-md"
            type="submit"
          >
            계산
          </button>
        </form>
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg">총 필요한 어금니 개수</p>
          <p className="text-6xl font-black">100000</p>
        </div>
      </div>
    </div>
  );
}
