# 유튜브 아이디어 수집 자동화

`thread-1.ningning.kr`에 배포할 첫 번째 웹앱입니다.

원본 프로젝트는 `유튜브 아이디어 수집 자동화`이며, CLI/Telegram/YouTube API 기반 자동화입니다. 이 저장소는 공개 배포 가능한 운영 대시보드로 포팅한 버전입니다.

## 배포 설정

- Platform: DigitalOcean App Platform
- Resource type: Static Site
- Build command: `npm run build`
- Output directory: `dist`
- Domain: `thread-1.ningning.kr`

## 보안 메모

원본 자동화의 `.env`, Telegram credential, SQLite DB, 로그 파일은 저장소에 포함하지 않습니다. 실제 수집 실행 기능은 별도의 서버형 백엔드로 분리해야 합니다.
