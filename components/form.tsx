import { API_URL } from "@/utils/api";
import { Input, Button, Card, Title, Stack } from "@mantine/core";
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  donationAmount: string;

};

export default function Form() {
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  
  return (
    <Card withBorder shadow="xs" p="xl" bg="cyan.2">
      <Title order={1} color="blue">
        Donate
      </Title>

      

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={"xs"}>
          <Input.Wrapper>
            <Input.Label>First Name</Input.Label>
            <Input  type="text"
        id="firstname"
        {...register('firstname', { required: 'Firstname is required' })}/>
        
        
        {errors.firstname && <p>{errors.firstname.message}</p>}
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Last Name</Input.Label>
            <Input type="text"
        id="lastname"
        {...register('lastname', { required: 'Lastname is required' })}/>
            {errors.lastname && <p>{errors.lastname.message}</p>}
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Email</Input.Label>
            <Input type="text"
        id="email"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Invalid email format',
          },
        })}/>
            {errors.email && <p>{errors.email.message}</p>}
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Donation Amount</Input.Label>
            <Input type="text"
        id="donationAmount"
        {...register('donationAmount', { required: 'Donation Amount is required' })}/>
            {errors.donationAmount && <p>{errors.donationAmount.message}</p>}
          </Input.Wrapper>
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </Card>
  );
}
