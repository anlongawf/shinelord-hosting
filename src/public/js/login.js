document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const apiKey = document.getElementById('apiKey').value;

    try {
        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, apiKey }),
        });

        const data = await response.json();

        if (data.success) {
            localStorage.setItem('token', data.token);
            console.log('Đăng nhập thành công!');
            window.location.href = data.redirectUrl || '/dashboard';

        } else {
            console.error('Đăng nhập thất bại:', data.message);
        }
    } catch (error) {
        console.error('Lỗi khi gửi yêu cầu đăng nhập:', error);
    }
});
