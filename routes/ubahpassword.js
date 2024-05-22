const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Konfigurasi koneksi ke MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'monitoring_ta'
});

// Menghubungkan ke database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ubahpw.html'));
});

// app.post('/change-password', (req, res) => {
//     const { username, oldPassword, newPassword, confirmPassword } = req.body;

//     // Memeriksa apakah password baru dan konfirmasi password cocok
//     if (newPassword !== confirmPassword) {
//         return res.status(400).json({ message: 'New password and confirm password do not match' });
//     }

//     // Mengambil pengguna dari database
//     connection.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
//         if (err) {
//             console.error('Error selecting user from database:', err);
//             return res.status(500).json({ message: 'Internal server error' });
//         }

//         // Memastikan pengguna ditemukan
//         if (results.length === 0) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const user = results[0];

//         // Membandingkan password lama dengan password yang tersimpan
//         if (oldPassword !== user.password) {
//             return res.status(401).json({ message: 'Incorrect old password' });
//         }

//         // Menyimpan password baru ke database
//         connection.query('UPDATE users SET password = ? WHERE id = ?', [newPassword, user.id], (err) => {
//             if (err) {
//                 console.error('Error updating user password:', err);
//                 return res.status(500).json({ message: 'Internal server error' });
//             }
//             res.status(200).json({ message: 'Password changed successfully' });
//         });
//     });
// });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
