export const projects = [
    {
        id: 1,
        title: 'Medi-X - 가상환자 기반 한의대 임상 역량 평가 플랫폼',
        description: '한의대 학생들의 임상 역량을 평가하기 위한 연구 목적의 플랫폼입니다.',
        image: null, // 이미지 경로 또는 URL (예: '/images/devboard.png')
        detail: {
            summary:
                'Node.js(Express)와 PostgreSQL 기반의 한의대 임상 역량 평가 플랫폼입니다. ' +
                'JWT 인증을 통한 회원 관리, 가상환자 데이터 관리, 실시간 대화 기반 진단 평가 기능을 제공합니다. ' +
                '팀 6인 프로젝트에서 백엔드 API 전체를 설계·구현했으며, Nginx를 통한 성능 최적화로 응답시간을 70% 단축했습니다.',
            role: '백엔드 개발 — API 설계 및 구현, DB 스키마 설계, 성능 최적화',
            period: '2025.02 ~ 2025.10 (8개월)',
            features: [
                '수업 생성 및 수강 신청 관리',
                '가상환자 생성 및 대화',
                '대화 기반 환자 진단 수행',
                '진단 내용 평가',
            ],
            trouble: [
                'Node.js 서버가 클라이언트 요청을 직접 처리하면서 트래픽이 몰릴수록 응답지연이 발생했습니다. ' +
                'Nginx를 리버스 프록시로 두고 로드밸런싱을 분리하여 평균 응답시간을 6000ms 이상에서 ' +
                '1200ms 이하로 개선했습니다.',
            ],
        },
        tags: ['Node.js(Express.js)', 'PostgreSQL', 'JWT', 'Nginx', 'AWS EC2', 'AWS RDS'],
        github: 'private',
        demo: 'https://medi-x.co.kr',
        featured: true,
    },
    {
        id: 2,
        title: '프로젝트 이름 B',
        description: '프로젝트에 대한 간략한 설명입니다.',
        image: null,
        detail: {
            summary: '프로젝트 전체 소개를 2~3문장으로 작성해주세요.',
            role: '백엔드 개발 담당, API 설계 및 구현',
            period: '2024.06 ~ 2024.09',
            features: [
                '주요 기능 1',
                '주요 기능 2',
                '주요 기능 3',
            ],
            trouble: '개발 중 겪었던 어려움이나 해결한 문제를 작성해주세요.',
        },
        tags: ['Spring Boot', 'MySQL', 'React'],
        github: 'https://github.com/jeonginh0',
        demo: null,
        featured: true,
    },
    {
        id: 3,
        title: '프로젝트 이름 C',
        description: '프로젝트에 대한 간략한 설명입니다.',
        image: null,
        detail: {
            summary: '프로젝트 전체 소개를 2~3문장으로 작성해주세요.',
            role: '풀스택 개발 담당',
            period: '2024.09 ~ 2024.11',
            features: [
                '주요 기능 1',
                '주요 기능 2',
                '주요 기능 3',
            ],
            trouble: '개발 중 겪었던 어려움이나 해결한 문제를 작성해주세요.',
        },
        tags: ['JavaScript', 'Express', 'MySQL'],
        github: 'https://github.com/jeonginh0',
        demo: null,
        featured: false,
    },
    {
        id: 4,
        title: '프로젝트 이름 C',
        description: '프로젝트에 대한 간략한 설명입니다.',
        image: null,
        detail: {
            summary: '프로젝트 전체 소개를 2~3문장으로 작성해주세요.',
            role: '풀스택 개발 담당',
            period: '2024.09 ~ 2024.11',
            features: [
                '주요 기능 1',
                '주요 기능 2',
                '주요 기능 3',
            ],
            trouble: '개발 중 겪었던 어려움이나 해결한 문제를 작성해주세요.',
        },
        tags: ['JavaScript', 'Express', 'MySQL'],
        github: 'https://github.com/jeonginh0',
        demo: null,
        featured: false,
    },
]
