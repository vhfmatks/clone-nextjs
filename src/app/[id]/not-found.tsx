import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">가맹점을 찾을 수 없습니다</h2>
        <p className="text-gray-600 mb-8">
          요청하신 가맹점 정보를 찾을 수 없습니다.<br/>
          올바른 가맹점 ID를 확인해 주세요.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          ← 가맹점 목록으로 돌아가기
        </Link>
      </div>
    </div>
  );
} 