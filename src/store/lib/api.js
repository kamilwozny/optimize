const FIREBASE_DB =
  'https://optimize-c7292-default-rtdb.europe-west1.firebasedatabase.app/';

export async function getAllHabits() {
  const response = await fetch(`${FIREBASE_DB}/habits.json`);
  const data = await response.json();
  var myData = Object.keys(data).map((key) => {
    return data[key];
  });
  if (!response.ok) {
    throw new Error(data.message || 'Fetch habits failed');
  }

  return myData;
}

export async function addNewHabit(habit) {
  const response = await fetch(`${FIREBASE_DB}/habits.json`, {
    method: 'POST',
    body: JSON.stringify(habit),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
}

export async function addUserHabit(habit) {
  const response = await fetch(`${FIREBASE_DB}/userHabits.json`, {
    method: 'POST',
    body: JSON.stringify(habit),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
}

export async function getAllUserHabits() {
  const response = await fetch(`${FIREBASE_DB}/userHabits.json`);
  const data = await response.json();
  var myData = Object.keys(data).map((key) => {
    return data[key];
  });
  if (!response.ok) {
    throw new Error(data.message || 'Fetch user habits failed');
  }
  const uid = localStorage.getItem('uid');
  const userData = [];
  myData.map((data) => {
    if (data.userId === uid) {
      userData.push(data);
    }
    return null;
  });
  return userData;
}
