import { postData, getData } from "../api";

export const addCategory = () => {
  const nameInp = document.getElementById('category-name');
  const previewInp = document.getElementById('category-image');
  const saveBtn = document.getElementById('category-add-btn');

  //Todo: Продолжение на 42 минуте

  const categoryData = {
    name: '',
    preview: ''
  };

  const checkValues = () => {
    if (nameInp.value === '' || previewInp.value === '') {
      saveBtn.disabled = true;
    } else {
      saveBtn.disabled = false;
    }
  };

  nameInp.addEventListener('input', () => {
    categoryData.name = nameInp.value;
    checkValues();
  })

  previewInp.addEventListener('input', () => {
    const file = previewInp.files[0];

    if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg') {
      const reader = new FileReader();

      reader.onload = () => {
        categoryData.preview = reader.result;
      }

      reader.onerror = () => {
        categoryData.preview = '';
        previewInp.value = '';
      }

      reader.readAsDataURL(file);

    } else {
      previewInp.value = '';
    }

    checkValues();
  })

  saveBtn.addEventListener('click', () => {
    postData('/categories', {
      method: 'POST',
      body: JSON.stringify(categoryData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((data) => {
      getData('/categories')
       .then((data) => {
        console.log(data);
       })
    })
  })

  checkValues();
}
