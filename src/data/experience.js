// 경험 (연구실, 동아리 등)
export const experience = [
    {
        id: 1,
        company: '동의대학교 인공지능학과 DxLAB',
        role: '학부연구생 (백엔드 엔지니어)',
        type: '학부연구생',
        period: '2025.03 ~ 2026.02',
        description:
            '한의대 학생의 임상 역량을 평가하는 AI 가상환자 진료 시뮬레이션 플랫폼 Medi-X의 백엔드를 담당했습니다. ' +
            '동의대, 대구한의대, 원광대 3개 한의대 198명의 학생 평가에 실제로 활용되었습니다.',
        tasks: [
            'DB 모델링 및 설계, 백엔드 API 설계 및 구현',
            'Thread 기반 멀티턴 대화로 가상환자 진료 시뮬레이션 구현',
            '컨트롤러 내 중복된 인증·응답 포맷 로직을 공통 모듈로 분리',
            'AWS EC2 배포 및 Nginx 로드밸런싱으로 로그인 응답 시간 6000ms → 1200ms 개선',
        ],
        tech: ['JavaScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'AWS EC2', 'Nginx'],
    },
    {
        id: 2,
        company: '동의대학교 창업동아리 Insight',
        role: '백엔드 개발',
        type: '동아리',
        period: '2024.05 ~ 2025.12',
        description: '백엔드 프로젝트 기획 및 개발을 담당했습니다.',
        tasks: [
            '개인화된 향수 추천 서비스 프로젝트 기획 및 개발',
        ],
        tech: ['Spring Boot', 'Java', 'MySQL', 'OpenAI API'],
    },
]
