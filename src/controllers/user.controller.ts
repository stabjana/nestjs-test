import { Controller, Get, Post, Body } from '@nestjs/common';
import { SupabaseService } from '../services/supabase.service';

@Controller('users')
export class UserController {
  constructor(private readonly supabaseService: SupabaseService) {}

  @Get()
  async getUsers() {
    const supabase = this.supabaseService.getClient();
    const { data, error } = await supabase.from('users').select('*');
    if (error) throw new Error(error.message);
    return data;
  }

  @Post()
  async createUser(@Body() userData: any) {
    const supabase = this.supabaseService.getClient();
    const { data, error } = await supabase.from('users').insert([userData]);
    if (error) throw new Error(error.message);
    return data;
  }
}