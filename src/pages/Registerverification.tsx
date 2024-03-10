interface props {
  email: string;
}

const Registerverification = ({ email }: props) => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-md max-w-md">
        <h2 className="text-3xl font-semibold mb-6">Email Verification</h2>
        <p className="text-gray-600 mb-8">
          Thank you for registering! We have sent a verification link to {email}
          . Please verify to activate your account.
        </p>

        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-12 w-12 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Registerverification;
