import { Http } from '@/utils/http'

export class AuthServerService {
	private static readonly http = new Http()

	static async requestRefreshToken() {}

	static async getCurrentUser() {}
}
