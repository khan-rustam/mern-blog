/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Alert, Button, Textarea } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Comment from './Comment';

export default function CommentSection({ postId }) {
  const { currentUser } = useSelector((state) => state.user);
  const [comment, setComment] = useState('');
  const [commentError, setCommentError] = useState(null);
  const [allComments, setAllComments] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (comment.length > 200) {
      return;
    }
    try {
      setCommentError(null);
      const res = await fetch('/api/comment/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: comment,
          postId: postId,
          userId: currentUser._id,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setComment('');
        toast.success('Comment Added successfully');
        setCommentError(null);
        setAllComments([...allComments, data]);
      } else {
        setCommentError(data.message);
      }
    } catch (error) {
      setCommentError('Failed to add comment');
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setCommentError(null);
        const res = await fetch(`/api/comment/getPostComments/${postId}`);
        const data = await res.json();

        if (res.ok) {
          setAllComments(data);
          setCommentError(null);
        } else {
          setCommentError(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchComments();
  }, [postId]);

  return (
    <div className='max-w-2xl mx-auto w-full p-3'>
      {currentUser ? (
        <div className='flex items-center gap-1 my-5 text-gray-500 text-sm'>
          <p>Sign In as:</p>{' '}
          <img
            src={currentUser.profilePicture}
            alt={currentUser.username}
            className='w-5 h-5 object-cover rounded-full'
          />
          <Link
            to={'/dashboard?tab=profile'}
            className=' text-xs text-cyan-500 hover:underline'
          >
            {' '}
            @{currentUser.username}{' '}
          </Link>
        </div>
      ) : (
        <div className='text-sm text-teal-500 my-5 flex gap-1'>
          You must be signed in to make comment.
          <Link className='text-blue-500 hover:underline' to={'/sign-in'}>
            {' '}
            Sign In{' '}
          </Link>
        </div>
      )}

      {currentUser && (
        <>
          <form
            className=' border border-teal-500 rounded-md p-3'
            onSubmit={handleSubmit}
          >
            <Textarea
              type=''
              placeholder='Add a comment.........'
              rows={'3'}
              maxLength={'200'}
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            />
            <div className=' flex justify-between items-center mt-5'>
              <p className=' text-sm text-gray-500'>
                {200 - comment.length} characters remaining
              </p>
              <Button outline gradientDuoTone={'purpleToBlue'} type='submit'>
                Submit
              </Button>
            </div>
          </form>
          {allComments.length === 0 ? (
            <p className='text-sm my-5'>No comment yet!</p>
          ) : (
            <>
              <div className='flex gap-1 text-sm my-5 items-center'>
                <p>Total comments: </p>
                <div className='border border-gray-400 py-1 px-2 rounded-sm'>
                  <p>{allComments.length}</p>
                </div>
              </div>
              {allComments.map((comment) => (
                <Comment key={comment._id} comment={comment} />
              ))}
            </>
          )}
          {commentError && (
            <Alert color='failure' className='mt-5'>
              {commentError}
            </Alert>
          )}
        </>
      )}
    </div>
  );
}
