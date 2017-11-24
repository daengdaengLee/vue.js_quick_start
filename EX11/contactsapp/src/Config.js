const BASE_URL = '/api';

export default function (type, no) {
    let result;
    switch (type) {
    case 'PAGESIZE':
        result = 5;
        break;
    // 전체 연락처 데이터 요청(페이징 포함), 연락처 추가
    case 'FETCH':
    case 'ADD':
        result = `${BASE_URL}/contacts`;
        break;
    // 연락처 업데이트, 연락처 한건 조회, 연락처 삭제
    case 'UPDATE':
    case 'FETCH_ONE':
    case 'DELETE':
        result = `${BASE_URL}/contacts/${no}`;
        break;
    // 연락처 사진 업로드->변경
    case 'UPDATE_PHOTO':
        result = `${BASE_URL}/contacts/${no}/photo`;
        break;
    default:
        result = 'Config.js ERROR!!!';
    }
    return result;
}
