import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:4000/'
    }),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (body) => ({
                method:'POST',
                url: 'signup',
                body: body,
                headers: {
                    'Content-Type':'application/json'
                }
            })
        }),
        signInForm: builder.mutation({
            query: (ab) => ({
                method: 'POST',
                url: 'signin',
                body: ab,
                headers: {
                    'Content-Type':'application/json'
                }
            })
        }),
        roomsById: builder.mutation({
            query: (hostel_id) => ({
                method:'POST',
                url:'/rooms',
                body:{hostel_id:hostel_id},
                headers: {
                    'Content-Type':'application/json'
                }
            })
        }),
        contactUsForm: builder.mutation({
            query: (ab) => ({
                method: 'POST',
                url: 'contactus',
                body: ab,
                headers: {
                    'Content-Type':'application/json'
                }
            })
        }),
        hostelDetails: builder.query({
            query: () => ({
                method: 'GET',
                url: 'hosteldetails',
                headers: {
                    'Content-Type':'application/json'
                }
            })
        }),
       
        

    })

})

export const { useSignUpMutation,
    useSignInFormMutation,
    useContactUsFormMutation,
    useHostelDetailsQuery,
    useRoomsByIdMutation,
} = api