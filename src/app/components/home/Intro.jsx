import React, { useEffect } from 'react';
import { selectAuth, toggleLogin } from '@/app/lib/slices/auth';
import { useSelector, useDispatch } from '@/app/lib/store';
import { useToastContext } from '@/hooks/ToastProvider';
import useApiHook from '@/hooks/useApiHook';
export default function Intro() {
  const auth = useSelector(selectAuth);
  const { addToast } = useToastContext();
  const { handleApiCall } = useApiHook();
  const dispatch = useDispatch();
  const logIn = async () => {
    const values = { email: 'wasif@gmail.com', password: '123' };
    await handleApiCall({
      method: 'post',
      url: '/auth/sign-in',
      data: values,
      headers: { Authorization: 'none' },
    })
      .then((res) => {
        if (res?.status === 200) {
        }
      })
      .catch((error) => {
        if (error?.message === 'timeout exceeded') {
          addToast('error', 'API request timed out.');
          return;
        } else {
          addToast('error', error?.response?.data?.errors);
          return;
        }
      });

    dispatch(
      toggleLogin({
        isUserLogin: true,
        userInfo: {
          user: {
            name: 'Wasif Munir',
            email: 'wasif@gmail.com',
            id: 123,
          },
        },
      })
    );
  };
  const logOut = () => {
    dispatch(
      toggleLogin({
        isUserLogin: false,
        userInfo: {},
      })
    );
  };

  const showSuccessToast = () => {
    addToast('success', 'Your action was completed.');
  };

  const showErrorToast = () => {
    addToast('error', 'Something went wrong.');
  };

  const showInfoToast = () => {
    addToast('info', 'Please check your inputs.');
  };

  useEffect(() => {}, [auth]);
  return (
    <div>
      <div>
        <button className=' border p-2 m-2' onClick={showSuccessToast}>
          Show Success Toast
        </button>
        <button className=' border p-2 m-2' onClick={showErrorToast}>
          Show Error Toast
        </button>
        <button className=' border p-2 m-2' onClick={showInfoToast}>
          Show Info Toast
        </button>
      </div>
      <button className=' border p-2 m-2' onClick={() => logIn()}>
        Add
      </button>
      <button className=' border p-2 m-2' onClick={() => logOut()}>
        Remove
      </button>
      <div>
        {auth?.isUserLogin
          ? `${auth?.userInfo?.user?.name} Welcome`
          : `User is logged Out`}
      </div>
    </div>
  );
}
