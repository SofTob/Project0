import { createClient } from '@supabase/supabase-js'
import { Database } from '../../database.types'
import 'react-native-url-polyfill/auto'

import {REACT_APP_SUPABASE_URL,REACT_APP_SUPABASE_ANON_KEY} from "@env"

const supabase = createClient<Database>(
    REACT_APP_SUPABASE_URL,
    REACT_APP_SUPABASE_ANON_KEY
    );

export default supabase