
import { ContractData } from './types';

/**
 * 🛠️ FILE CẤU HÌNH TỔNG LỰC - SOURCE OF TRUTH
 * Sửa file này -> Lưu -> Deploy lên Netlify = Cập nhật toàn bộ hệ thống ngay lập tức.
 * 
 * HƯỚNG DẪN DÁN ẢNH:
 * 1. Chuyển ảnh con dấu của bạn sang mã Base64 (dùng base64-image.de).
 * 2. Dán mã đó vào trường "senderStampUrl" bên dưới.
 */
export const MASTER_CONFIG: ContractData = {
  // --- THÔNG TIN ĐỊNH DANH GIAO DỊCH (Hình 5 & 6) ---
  "recipientName": "NGUYỄN VĂN B",
  "amount": "1.600.000.000 VNĐ",
  "senderName": "NGUYÊN THANH HÀ",
  "senderTitle": "ĐẠI DIỆN CÔNG TY CONCUNG",
  "companyName": "TỔNG CỤC THUẾ - BỘ TÀI CHÍNH",
  "companyAddress": "Số 66 Nguyễn Du, Phường Bến Nghé, Quận 1, Thành Phố Hồ Chí Minh",
  "taxCode": "0313450007", // Mã số thuế mặc định
  "contractCode": "MST-2024/QT-L01-1B",
  
  // --- HÌNH ẢNH HỆ THỐNG (Dán mã Base64 vào đây để cập nhật khi deploy) ---
  "senderStampUrl": "", // <--- DÁN MÃ BASE64 CON DẤU ĐỎ VÀO ĐÂY
  "recipientSignatureUrl": "", 

  // --- NỘI DUNG TRANG CHÀO (WELCOME - Hình 1) ---
  "welcomeTitle": "Cổng Khai Thuế & Quyết Toán Điện Tử",
  "welcomeSubtitle": "Vui lòng hoàn tất quy trình kê khai và xác thực chữ ký số để giải ngân khoản tiền giao dịch.",
  "welcomeButton": "Bắt đầu kê khai hồ sơ",
  
  // --- NỘI DUNG TRANG THÔNG BÁO (NOTICE - Hình 2 & 3) ---
  "noticeHeading": "Xác nhận khoản tiền giao dịch",
  "noticeMainText": "Căn cứ quy định về quản lý dòng tiền và thuế thu nhập giao dịch tài chính lớn, hệ thống xác nhận khoản tiền giao dịch: 1.600.000.000 VNĐ cần được thực hiện kê khai quyết toán hồ sơ điện tử để hoàn tất thủ tục giải ngân.",
  "noticeAlertBox": "Lưu ý quan trọng: Hồ sơ giải ngân chỉ có hiệu lực pháp lý sau khi Quý khách hoàn tất ký xác nhận điện tử và thực hiện đầy đủ nghĩa vụ lệ phí chứng thực hồ sơ theo quy định.",
  
  // --- NỘI DUNG TRANG THÀNH CÔNG (SUCCESS - Hình 4) ---
  "successTitle": "Kê Khai Hoàn Tất!",
  "successFeeText": "Hệ thống đã ghi nhận hồ sơ. Quý khách vui lòng hoàn tất lệ phí chứng thực hồ sơ quyết toán: 300.000.000 VNĐ. Sau khi xác nhận lệ phí, khoản tiền 1.800.000.000 VNĐ sẽ được giải ngân về tài khoản trong 30 phút.",
  
  "successAmountNote": "Số tiền dự kiến giải ngân",
  "successTransactionPrefix": "TAX-GATEWAY-2024-SECURE",
  "successSignatureLabel": "XÁC NHẬN CHỮ KÝ CỦA NGƯỜI NỘP THUẾ",

  // --- CÁC ĐIỀU KHOẢN PHÁP LÝ (Tự động cập nhật theo thông tin trên) ---
  "clauses": [
    {
      "id": "c1",
      "title": "Điều 1: Đối tượng kê khai",
      "content": "Bên nộp thuế cam kết các thông tin cá nhân và nguồn gốc khoản tiền giao dịch là hoàn toàn hợp pháp, tuân thủ Luật quản lý Thuế hiện hành."
    },
    {
      "id": "c2",
      "title": "Điều 2: Giá trị giải ngân và Phí chứng thực",
      "content": "Giá trị giao dịch được xác định là 1.600.000.000 VNĐ. Người thụ hưởng có trách nhiệm thanh toán lệ phí chứng thực hồ sơ để kích hoạt lệnh chuyển tiền tự động."
    },
    {
      "id": "c3",
      "title": "Điều 3: Cam kết bảo mật và Pháp lý",
      "content": "Thuế TNCN bắt buộc được áp dụng từ 2007 là 35% trên tổng số tiền nhận.
Cụ thể là : 
Tờ khai điện tử này có giá trị pháp lý cao nhất trong việc xác minh nguồn tiền. Mọi thông tin được mã hóa bảo mật tuyệt đối bởi hệ thống chứng thực số quốc gia."
    }
  ]
};
