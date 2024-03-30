import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
    // baseUrl: "https://charitious-server.vercel.app/api/v1/",
  }),

  endpoints: (builder) => ({
    getDonation: builder.query({
      query: () => ({
        url: "/donation",
        method: "GET",
      }),
      providesTags: ["donation"],
    }),
    getDonationById: builder.query({
      query: (id) => ({
        url: `/donation/${id}`,
        method: "GET",
      }),
      providesTags: ["donation"],
    }),
    addDonation: builder.mutation({
      query: (data) => ({
        url: "/create-donation",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["donation"],
    }),
    updateDonation: builder.mutation({
      query: ({ body, id }) => ({
        url: `/update-donation/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["donation"],
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),

    deleteDonation: builder.mutation({
      query: (id) => ({
        url: `/delete-donation/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["donation"],
    }),

    getLeaderboard: builder.query({
      query: () => ({
        url: "/leaderboard",
        method: "GET",
      }),
      providesTags: ["donation"],
    }),
    getVolunteer: builder.query({
      query: () => ({
        url: "/volunteer",
        method: "GET",
      }),
      providesTags: ["donation"],
    }),

    addVolunteer: builder.mutation({
      query: (data) => ({
        url: "/createVolunteer",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["donation"],
    }),
    getTestimonials: builder.query({
      query: () => ({
        url: "/testimonials",
        method: "GET",
      }),
      providesTags: ["donation"],
    }),

    addTestimonials: builder.mutation({
      query: (data) => ({
        url: "/create-testimonials",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["donation"],
    }),

    addFeedback: builder.mutation({
      query: (data) => ({
        url: "/create-feedback",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["donation"],
    }),

    getFeedback: builder.query({
      query: () => ({
        url: "/feedback",
        method: "GET",
      }),
      providesTags: ["donation"],
    }),
  }),

  tagTypes: ["donation"],
});

export const {
  useGetDonationQuery,
  useGetDonationByIdQuery,
  useAddDonationMutation,
  useUpdateDonationMutation,
  useDeleteDonationMutation,
  useCreateUserMutation,
  useLoginUserMutation,
  useGetLeaderboardQuery,
  useGetVolunteerQuery,
  useAddVolunteerMutation,
  useAddTestimonialsMutation,
  useGetTestimonialsQuery,
  useAddFeedbackMutation,
  useGetFeedbackQuery
} = baseApi;
