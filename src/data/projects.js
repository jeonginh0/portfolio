import mediXImg from '../assets/projects/Medi-X-Main.png'
import specMateImg from '../assets/projects/specmate-Main.png'
import renalyzeImg from '../assets/projects/Renalyze-Main.png'

// 주요 프로젝트 목록 (이력서·포트폴리오 PDF 기준)
export const projects = [
    {
        id: 1,
        title: 'Medi-X - AI 가상환자 기반 한의대 임상 역량 평가 플랫폼',
        description: '3개 한의대 198명의 학생 평가에 실제 활용된 AI 가상환자 진료 시뮬레이션 플랫폼입니다.',
        image: mediXImg,
        detail: {
            summary:
                '한의대 학생의 임상 역량을 평가하기 위한 AI 가상환자 진료 시뮬레이션 플랫폼입니다. ' +
                '동의대학교 인공지능학과 DxLAB에서 동의대학교 한의대 교수님과 협업한 연구 프로젝트로, ' +
                '학생이 가상환자와 대화하며 내린 진단을 교수가 평가합니다. ' +
                '동의대, 대구한의대, 원광대 3개 한의대 198명의 학생 평가에 실제로 활용되었습니다. ' +
                '6인 팀에서 아키텍처 설계와 백엔드 개발을 담당했고, 동시 로그인 병목을 해결해 응답 시간을 6000ms에서 1200ms로 약 80% 줄였습니다.',
            role: '아키텍처 설계 및 백엔드 개발',
            period: '2025.02.01 ~ 2025.10.15 (8개월, 서비스 중)',
            team: 'PM 1인, FE 1인, AI 2인, BE 2인 (6인 프로젝트)',
            features: [
                '수업 생성 및 수강 신청 관리',
                '가상환자 생성 및 Thread 기반 멀티턴 대화',
                '대화 기반 환자 진단 수행',
                '진단 내용 평가',
            ],
            contributions: [
                '교수, 학생, 강의, 과제, 대화, 평가 등 DB 모델링 및 엔티티 구현',
                'Thread 기반 멀티턴 대화로 대화 맥락을 유지하는 가상환자 진료 시뮬레이션 구현',
                '컨트롤러 내 반복되던 DB 조회·인증·예외 처리·응답 포맷 로직을 공통 모듈로 분리',
                'AWS EC2 인스턴스에 Node.js 서버 배포',
                'Nginx 리버스 프록시와 다중 프로세스로 API 부하 분산 및 성능 개선',
            ],
            trouble: [
                '평가 시작 시간에 학생 로그인이 몰리면 로그인뿐 아니라 모든 API의 응답이 느려지고, ' +
                '평균 응답 시간이 6000ms까지 늘어나 서버가 멈춘 것처럼 보이는 현상이 발생했습니다. ' +
                '원인을 추적한 결과, 순수 JS로 구현된 bcryptjs의 비밀번호 비교 연산이 단일 Node.js 프로세스의 메인 스레드를 점유해 ' +
                '이벤트 루프가 다른 요청을 처리하지 못하고 있었습니다. ' +
                'Node.js 프로세스를 3개로 늘려 CPU 코어에 연산을 분산하고, 앞단에 Nginx 리버스 프록시를 두어 요청을 로드밸런싱했습니다. ' +
                '그 결과 로그인 API 평균 응답 시간이 6000ms에서 1200ms로 약 80% 감소했습니다.',
            ],
        },
        tags: ['JavaScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'AWS EC2', 'Nginx'],
        github: 'private',
        demo: 'https://medi-x.co.kr',
        featured: true,
    },
    {
        id: 2,
        title: '스펙메이트 - AI 기반 맞춤형 PC 견적 추천 서비스',
        description: '사용자의 예산과 용도에 맞춰 AI가 PC 견적을 생성해주는 서비스입니다.',
        image: specMateImg,
        detail: {
            summary:
                'Spring Boot와 PostgreSQL 기반의 AI 맞춤형 PC 견적 추천 서비스입니다. ' +
                '교내 캡스톤디자인 경진대회 출품작이며 NIPA 소프트웨어 성과물로 등록(ASSET_0014473)되었습니다. ' +
                '기존 견적 서비스가 가격순·인기순 필터에만 의존하는 한계를 넘어, 사용자가 입력한 요구사항을 분석해 최적의 견적을 구성하고 설명해줍니다. ' +
                'PM과 백엔드를 겸해 아키텍처 설계와 일정 관리를 맡았고, 부품 검색 조회 시간을 96ms에서 8ms로 약 92% 단축했습니다.',
            role: 'PM 겸 백엔드 개발',
            period: '2025.09.09 ~ 2025.12.12 (3개월)',
            team: 'FE 1인, AI 1인, BE 2인 (4인 프로젝트)',
            features: [
                '주요 부품별 정보 및 판매 링크 제공',
                'DB 내 부품 데이터 활용 맞춤형 견적 생성 및 대화',
                '생성된 견적 수정 및 삭제, PDF 파일 제공',
                'JWT 활용 액세스 권한 부여',
            ],
            contributions: [
                '유저, 채팅방, 대화내역, 부품, 견적 엔티티 설계 및 구현',
                '시스템 흐름 구성 및 API 설계 (회원가입/인증, 부품 조회, 견적 생성)',
                'OpenAI API에 사용자 조건과 부품 데이터를 전달해 견적을 생성하고, 응답을 검증해 호환되지 않는 부품 조합 필터링',
                'JWT 기반 로그인·로그아웃·토큰 재발급 구현 (Redis로 Refresh Token 저장 및 Access Token 블랙리스트 관리)',
                'Swagger로 API 문서화, 주요 일정 관리 및 프론트엔드와의 연동 일정 조율',
                'Docker 컨테이너화 후 AWS EC2 배포',
            ],
            trouble: [
                '부품명 검색은 LIKE \'%keyword%\' 형태의 중간 일치가 필요한데, B-tree 인덱스는 전방 일치만 활용할 수 있어 ' +
                '부품 조회마다 전체 스캔이 발생했습니다. ' +
                '처음에는 검색 조건별로 Redis 캐시를 적용했지만, 가격과 재고가 자주 갱신되는 데이터라 오래된 가격이 노출될 위험이 있었습니다. ' +
                '캐시를 제거하고 PostgreSQL pg_trgm 확장 기반 GIN 인덱스로 중간 일치 검색도 인덱스를 타도록 개선했으며, ' +
                '카테고리와 제조사 필터에는 복합 인덱스를 적용했습니다. ' +
                'EXPLAIN ANALYZE 기준 쿼리 실행 시간이 96ms에서 8ms로 약 92% 단축되었고, 항상 최신 가격을 반환하는 구조가 되었습니다.',
            ],
        },
        tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker', 'AWS EC2'],
        github: 'https://github.com/spec-mate/backend',
        demo: null,
        featured: true,
    },
    {
        id: 3,
        title: 'Renalyze - AI 기반 전/월세 계약서 분석 플랫폼',
        description: '사회초년생이 부동산 계약서의 위험요소를 쉽게 파악하도록 돕는 AI 분석 서비스입니다.',
        image: renalyzeImg,
        detail: {
            summary:
                'NestJS와 Next.js 기반의 AI 전/월세 계약서 분석 플랫폼입니다. ' +
                '캡스톤디자인 프로젝트이며 NIPA 소프트웨어 성과물로 등록되었습니다. ' +
                '사회초년생이 계약서의 법률 용어와 누락 항목을 인지하지 못해 피해를 입는 문제를 해결하기 위해 기획했습니다. ' +
                '계약서를 업로드하면 OCR로 텍스트를 추출하고 OpenAI API로 위험요소와 누락요소를 분석하며, ' +
                '분석 내용을 바탕으로 질문에 답하는 챗봇을 제공합니다. 2인 프로젝트에서 기획(디자인)과 풀스택 개발을 담당했습니다.',
            role: '프로젝트 기획(디자인) 및 풀스택 개발',
            period: '2025.03.09 ~ 2025.06.12 (3개월)',
            team: 'WEB(BE, FE) 1인, AI 1인 (2인 프로젝트)',
            features: [
                '계약서 OCR 분석',
                'AI 계약서 항목 검토 (8개 카테고리, 19개 항목)',
                '분석된 계약서 기반 부동산 AI 챗봇',
                '회원 인증 및 관리',
            ],
            contributions: [
                '계약서 분석 파이프라인 구축 (파일 업로드 → Naver CLOVA OCR 텍스트 추출 → 전처리 → OpenAI 기반 위험 조항 분석 → 결과 저장)',
                'OpenAI API 기반 계약서 분석 프롬프트 구성 및 응답 정제 로직 구현',
                'OpenAI Assistants API(Thread 기반)로 분석된 계약서 내용을 문맥으로 활용하는 챗봇 구현',
                'JWT 인증 기반 사용자 관리 및 RESTful API 설계',
                '분석 결과 시각화 UI 및 계약서 업로드 화면 구현',
            ],
            trouble: [
                '업로드된 계약서 약 10건 중 1건에서 글자를 제대로 인식하지 못해, 잘못된 텍스트가 AI 분석 결과의 오류로 이어졌습니다. ' +
                '원인은 촬영 상태에 따른 저화질, 낮은 대비, 계약서 외 불필요한 영역이 함께 인식되는 문제였습니다. ' +
                'OCR 이전 단계에 sharp 기반 전처리 레이어를 두어 인식 영역을 명확히 지정하고, 회전 보정과 화질 개선, 대비 강조를 적용했습니다. ' +
                '그 결과 테스트로 업로드한 계약서 10건을 모두 정상적으로 인식했습니다.',
                'GPT 응답에 자연어가 섞이거나 계약서에 없는 내용을 임의로 생성하는 문제도 있었습니다. ' +
                'temperature를 0.3으로 낮추고 JSON 외 출력 금지와 OCR 원문 그대로 반환하도록 프롬프트를 설계했으며, ' +
                '코드블록으로 감싸진 응답은 정규표현식으로 정제하고 파싱 실패 시 예외를 전파해 안정성을 확보했습니다.',
            ],
        },
        tags: ['TypeScript', 'NestJS', 'Next.js', 'MongoDB', 'Docker', 'OpenAI API'],
        github: 'https://github.com/jeonginh0/Renalyze',
        demo: null,
        featured: true,
    },
]
