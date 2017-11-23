export default function (type, no) {
    let result;
    const BASE_URL = '/api';

    switch (type) {
    // 한 페이지에 보여줄 페이지 사이즈
    case 'PAGESIZE':
        result = 5;
        break;
    // 자세한 API의 도움말은 http://sample.bmaster.kro.kr 참조
    // 전체 연락처 데이터 요청(페이징 포함)
    case 'FETCH':
    case 'ADD':
        result = `${BASE_URL}/contacts`;
        break;
    case 'UPDATE':
    case 'FETCH_ONE':
    case 'DELETE':
        result = `${BASE_URL}/contacts/${no}`;
        break;
    case 'UPDATE_PHOTO':
        result = `${BASE_URL}/contacts/${no}/photo`;
        break;
    default:
    }

    return result;
}
