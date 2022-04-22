const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
nome: { type: String, required: true, minlength: 3, maxlength: 100 },
cpf: { type: String, required: true, minlength: 11, maxlength: 14 },
datanasc: { type: String, required: true, minlength: 8, maxlength: 10 },
email: { type: String, required: true, minlength: 5, maxlength: 100 },
telefone: { type: String, required: true, minlength: 10, maxlength: 13 },
logadouro: { type: String, required: true, minlength: 3, maxlength: 100 },
complemento:{ type: String, required: false, minlength: 3, maxlength: 300 },
numero: { type: Number, required: true, minlength: 3, maxlength: 5 },
cep: { type: String, required: true, minlength: 8, maxlength: 10 },
bairro: { type: String, required: true, minlength: 3, maxlength: 100 },
cidade: { type: String, required: true, minlength: 3, maxlength: 100 },
estado: { type: String, required: true, minlength: 2, maxlength: 2 },
turma: { type: String, required: true, minlength: 1, maxlength: 20 },
funcao: { type: String, required: true, minlength: 3, maxlength: 100 },
matricula: { type: String, required: true, minlength: 4, maxlength: 15 },
comentarios: { type: String, required: false, minlength: 3, maxlength: 500 },
imagem: { type: String, required: false, minlength: 3, maxlength: 300 },
createAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Aluno', StudentSchema, 'alunos');







