import { Restaurant } from './types';

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: '도쿄빙수 이수점',
    category: '아이스크림/요거트/빙수',
    address: '서울 동작구 동작대로27길 38 , 1층 103,104호 (사당동)',
    phone: '02-3482-0503',
    description: '신선한 재료로 만드는 프리미엄 빙수 전문점',
    businessHours: '매일 11:00 - 22:00',
    rating: 4.5,
    images: ['/images/restaurant1.jpg'],
    keywords: ['빙수', '디저트', '사당', '아이스크림']
  },
  {
    id: '2',
    name: '맛있는 파스타 강남점',
    category: '이탈리안/파스타',
    address: '서울 강남구 강남대로 123길 45, 2층',
    phone: '02-1234-5678',
    description: '정통 이탈리안 파스타를 합리적인 가격에',
    businessHours: '평일 11:30 - 21:30, 주말 12:00 - 22:00',
    rating: 4.3,
    images: ['/images/restaurant2.jpg'],
    keywords: ['파스타', '이탈리안', '강남', '런치']
  },
  {
    id: '3',
    name: '한우마을 홍대점',
    category: '한식/고기',
    address: '서울 마포구 와우산로 78, 1층',
    phone: '02-2345-6789',
    description: '1++등급 한우를 사용한 프리미엄 고기집',
    businessHours: '매일 17:00 - 02:00',
    rating: 4.7,
    images: ['/images/restaurant3.jpg'],
    keywords: ['한우', '고기', '홍대', '회식']
  },
  {
    id: '4',
    name: '스시젠 명동점',
    category: '일식/스시',
    address: '서울 중구 명동길 34, 3층',
    phone: '02-3456-7890',
    description: '신선한 회와 정성스런 스시 오마카세',
    businessHours: '화-일 18:00 - 23:00 (월요일 휴무)',
    rating: 4.8,
    images: ['/images/restaurant4.jpg'],
    keywords: ['스시', '오마카세', '명동', '일식']
  },
  {
    id: '5',
    name: '브런치카페 성수점',
    category: '카페/브런치',
    address: '서울 성동구 연무장길 56, 1층',
    phone: '02-4567-8901',
    description: '분위기 좋은 성수동 브런치 카페',
    businessHours: '매일 09:00 - 21:00',
    rating: 4.2,
    images: ['/images/restaurant5.jpg'],
    keywords: ['브런치', '카페', '성수', '분위기']
  },
  {
    id: '6',
    name: '중국집 용궁 잠실점',
    category: '중식',
    address: '서울 송파구 올림픽로 456, 지하 1층',
    phone: '02-5678-9012',
    description: '40년 전통의 중화요리 전문점',
    businessHours: '매일 11:00 - 22:00',
    rating: 4.4,
    images: ['/images/restaurant6.jpg'],
    keywords: ['중식', '짜장면', '잠실', '전통']
  },
  {
    id: '7',
    name: '타코벨 신촌점',
    category: '멕시칸/패스트푸드',
    address: '서울 서대문구 신촌로 234, 2층',
    phone: '02-6789-0123',
    description: '정통 멕시칸 타코와 부리또',
    businessHours: '평일 11:00 - 23:00, 주말 10:00 - 24:00',
    rating: 4.0,
    images: ['/images/restaurant7.jpg'],
    keywords: ['타코', '멕시칸', '신촌', '패스트푸드']
  },
  {
    id: '8',
    name: '김밥천국 건대점',
    category: '한식/분식',
    address: '서울 광진구 능동로 123, 1층',
    phone: '02-7890-1234',
    description: '24시간 든든한 한 끼 해결',
    businessHours: '24시간 영업',
    rating: 3.9,
    images: ['/images/restaurant8.jpg'],
    keywords: ['김밥', '분식', '건대', '24시간']
  },
  {
    id: '9',
    name: '치킨플러스 서초점',
    category: '치킨/패스트푸드',
    address: '서울 서초구 서초대로 567, 1층',
    phone: '02-8901-2345',
    description: '바삭한 후라이드와 양념치킨 전문점',
    businessHours: '매일 16:00 - 02:00',
    rating: 4.1,
    images: ['/images/restaurant9.jpg'],
    keywords: ['치킨', '배달', '서초', '야식']
  },
  {
    id: '10',
    name: '베이커리 몽상 이태원점',
    category: '베이커리/디저트',
    address: '서울 용산구 이태원로 789, 1층',
    phone: '02-9012-3456',
    description: '프랑스 전통 제빵 기법의 아티장 베이커리',
    businessHours: '매일 07:00 - 20:00',
    rating: 4.6,
    images: ['/images/restaurant10.jpg'],
    keywords: ['베이커리', '빵', '이태원', '디저트']
  }
];

export function getRestaurantById(id: string): Restaurant | undefined {
  return restaurants.find(restaurant => restaurant.id === id);
}

export function getAllRestaurants(): Restaurant[] {
  return restaurants;
} 