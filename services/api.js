import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://xpmfealbmotysyjkftjn.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwbWZlYWxibW90eXN5amtmdGpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2NDk4MjQsImV4cCI6MjA0ODIyNTgyNH0.7Z2VM90tWpQOi85FZU89WduDW7CZHdxu6TE1pWs3Hlk",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwbWZlYWxibW90eXN5amtmdGpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2NDk4MjQsImV4cCI6MjA0ODIyNTgyNH0.7Z2VM90tWpQOi85FZU89WduDW7CZHdxu6TE1pWs3Hlk"
    }
})